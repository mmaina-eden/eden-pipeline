/**
 * AdminPanel — slide-in drawer for SUPER_ADMIN to manage users.
 */
import { useState, useEffect } from "react";
import { getUsers, addUser, removeUser, sha256 } from "../lib/userManager";
import type { UserRecord } from "../auth.config";

const CSS = `
  @keyframes slideIn{from{transform:translateX(100%);opacity:0}to{transform:translateX(0);opacity:1}}
  @keyframes fadeOverlay{from{opacity:0}to{opacity:1}}
  .admin-panel{animation:slideIn 0.25s ease forwards;}
  .admin-overlay{animation:fadeOverlay 0.2s ease forwards;}
  .admin-remove-btn{transition:all 0.15s;}
  .admin-remove-btn:hover{background:rgba(244,63,94,0.2)!important;color:#f87171!important;}
  .admin-add-input{transition:border-color 0.2s;}
  .admin-add-input:focus{border-color:rgba(124,58,237,0.5)!important;outline:none!important;box-shadow:0 0 0 3px rgba(124,58,237,0.15)!important;}
`;

interface Props {
  currentUser: string;
  onClose:     () => void;
}

export default function AdminPanel({ currentUser, onClose }: Props) {
  const [users, setUsers]     = useState<UserRecord[]>([]);
  const [newUser, setNewUser] = useState("");
  const [newPass, setNewPass] = useState("");
  const [error, setError]     = useState("");
  const [success, setSuccess] = useState("");
  const [adding, setAdding]   = useState(false);
  const [showPass, setShowP]  = useState(false);

  function refresh() { setUsers(getUsers()); }
  useEffect(() => { refresh(); }, []);

  async function handleAdd(e: React.FormEvent) {
    e.preventDefault();
    setError(""); setSuccess("");
    if (!newUser.trim()) { setError("Username is required."); return; }
    if (!newPass.trim() || newPass.length < 6) { setError("Password must be at least 6 characters."); return; }
    setAdding(true);
    try {
      const hash = await sha256(newPass);
      addUser(newUser.trim(), hash);
      setSuccess(`User "${newUser.trim()}" added.`);
      setNewUser(""); setNewPass("");
      refresh();
    } catch (err: any) {
      setError(err.message || "Failed to add user.");
    } finally {
      setAdding(false);
    }
  }

  function handleRemove(username: string) {
    if (!confirm(`Remove user "${username}"? This cannot be undone.`)) return;
    try { removeUser(username); refresh(); setSuccess(`User "${username}" removed.`); setError(""); }
    catch (err: any) { setError(err.message); }
  }

  const regularUsers = users.filter(u => u.role !== "SUPER_ADMIN");
  const adminUser    = users.find(u => u.role === "SUPER_ADMIN");

  return (
    <>
      <style>{CSS}</style>
      {/* Overlay */}
      <div className="admin-overlay" onClick={onClose}
        style={{ position:"fixed", inset:0, background:"rgba(0,0,0,0.6)", zIndex:300 }} />

      {/* Drawer */}
      <div className="admin-panel"
        style={{ position:"fixed", top:0, right:0, bottom:0, width:"100%", maxWidth:420, background:"linear-gradient(180deg,#0f0a1e 0%,#0a0a1a 100%)", borderLeft:"1px solid rgba(124,58,237,0.2)", zIndex:301, display:"flex", flexDirection:"column", overflow:"hidden" }}>

        {/* Header */}
        <div style={{ padding:"20px 24px 16px", borderBottom:"1px solid rgba(255,255,255,0.07)", display:"flex", alignItems:"center", gap:12 }}>
          <span style={{ fontSize:20, filter:"drop-shadow(0 0 8px rgba(124,58,237,0.7))" }}>👥</span>
          <div style={{ flex:1 }}>
            <div style={{ color:"#fff", fontWeight:800, fontSize:15 }}>User Management</div>
            <div style={{ color:"rgba(255,255,255,0.35)", fontSize:11, marginTop:2 }}>Super Admin controls</div>
          </div>
          <button onClick={onClose}
            style={{ background:"rgba(255,255,255,0.06)", border:"1px solid rgba(255,255,255,0.1)", borderRadius:8, color:"rgba(255,255,255,0.5)", fontSize:16, cursor:"pointer", width:32, height:32, display:"flex", alignItems:"center", justifyContent:"center" }}>
            ✕
          </button>
        </div>

        <div style={{ flex:1, overflowY:"auto", padding:"20px 24px", display:"flex", flexDirection:"column", gap:20 }}>

          {/* Super admin row */}
          <div>
            <div style={{ fontSize:10, fontWeight:800, color:"rgba(255,255,255,0.3)", letterSpacing:"1px", textTransform:"uppercase", marginBottom:8 }}>Super Admin</div>
            <div style={{ background:"rgba(124,58,237,0.12)", border:"1px solid rgba(124,58,237,0.25)", borderRadius:12, padding:"12px 16px", display:"flex", alignItems:"center", gap:12 }}>
              <div style={{ width:36, height:36, borderRadius:"50%", background:"linear-gradient(135deg,#7c3aed,#a855f7)", display:"flex", alignItems:"center", justifyContent:"center", fontSize:16 }}>👑</div>
              <div style={{ flex:1 }}>
                <div style={{ color:"#c4b5fd", fontWeight:700, fontSize:13 }}>{adminUser?.username}</div>
                <div style={{ color:"rgba(255,255,255,0.3)", fontSize:11, marginTop:2 }}>Full system access · cannot be removed</div>
              </div>
              <span style={{ fontSize:9, fontWeight:800, padding:"3px 8px", borderRadius:10, background:"rgba(124,58,237,0.3)", color:"#c4b5fd", border:"1px solid rgba(124,58,237,0.4)" }}>ADMIN</span>
            </div>
          </div>

          {/* Regular users */}
          <div>
            <div style={{ fontSize:10, fontWeight:800, color:"rgba(255,255,255,0.3)", letterSpacing:"1px", textTransform:"uppercase", marginBottom:8 }}>
              Users ({regularUsers.length})
            </div>
            {regularUsers.length === 0 ? (
              <div style={{ background:"rgba(255,255,255,0.02)", border:"1px solid rgba(255,255,255,0.06)", borderRadius:12, padding:"20px", textAlign:"center", color:"rgba(255,255,255,0.25)", fontSize:12 }}>
                No regular users yet. Add one below.
              </div>
            ) : (
              <div style={{ display:"flex", flexDirection:"column", gap:8 }}>
                {regularUsers.map(u => (
                  <div key={u.username} style={{ background:"rgba(255,255,255,0.03)", border:"1px solid rgba(255,255,255,0.07)", borderRadius:12, padding:"12px 16px", display:"flex", alignItems:"center", gap:12 }}>
                    <div style={{ width:36, height:36, borderRadius:"50%", background:"linear-gradient(135deg,#0f172a,#1e293b)", border:"1px solid rgba(6,182,212,0.3)", display:"flex", alignItems:"center", justifyContent:"center", fontSize:16 }}>👤</div>
                    <div style={{ flex:1 }}>
                      <div style={{ color:"#fff", fontWeight:600, fontSize:13 }}>{u.username}</div>
                      <div style={{ color:"rgba(255,255,255,0.3)", fontSize:11, marginTop:2 }}>Standard user · pipeline access only</div>
                    </div>
                    <span style={{ fontSize:9, fontWeight:800, padding:"3px 8px", borderRadius:10, background:"rgba(6,182,212,0.15)", color:"#67e8f9", border:"1px solid rgba(6,182,212,0.25)" }}>USER</span>
                    {u.username !== currentUser && (
                      <button className="admin-remove-btn" onClick={() => handleRemove(u.username)}
                        style={{ padding:"5px 10px", borderRadius:8, border:"1px solid rgba(244,63,94,0.25)", background:"rgba(244,63,94,0.08)", color:"#f87171", cursor:"pointer", fontSize:11 }}>
                        Remove
                      </button>
                    )}
                  </div>
                ))}
              </div>
            )}
          </div>

          {/* Add user form */}
          <div>
            <div style={{ fontSize:10, fontWeight:800, color:"rgba(255,255,255,0.3)", letterSpacing:"1px", textTransform:"uppercase", marginBottom:12 }}>Add New User</div>
            <form onSubmit={handleAdd} style={{ display:"flex", flexDirection:"column", gap:12 }}>
              <div>
                <label style={{ display:"block", fontSize:11, fontWeight:700, color:"rgba(255,255,255,0.4)", marginBottom:6, letterSpacing:"0.8px" }}>USERNAME</label>
                <input className="admin-add-input" type="text" value={newUser} onChange={e => setNewUser(e.target.value)}
                  placeholder="e.g. JohnDoe" autoComplete="off"
                  style={{ width:"100%", padding:"10px 14px", borderRadius:10, border:"1px solid rgba(255,255,255,0.1)", background:"rgba(255,255,255,0.05)", color:"#fff", fontSize:13, boxSizing:"border-box" }} />
              </div>
              <div>
                <label style={{ display:"block", fontSize:11, fontWeight:700, color:"rgba(255,255,255,0.4)", marginBottom:6, letterSpacing:"0.8px" }}>PASSWORD</label>
                <div style={{ position:"relative" }}>
                  <input className="admin-add-input" type={showPass?"text":"password"} value={newPass} onChange={e => setNewPass(e.target.value)}
                    placeholder="Minimum 6 characters" autoComplete="new-password"
                    style={{ width:"100%", padding:"10px 44px 10px 14px", borderRadius:10, border:"1px solid rgba(255,255,255,0.1)", background:"rgba(255,255,255,0.05)", color:"#fff", fontSize:13, boxSizing:"border-box" }} />
                  <button type="button" onClick={() => setShowP(p=>!p)} tabIndex={-1}
                    style={{ position:"absolute", right:12, top:"50%", transform:"translateY(-50%)", background:"none", border:"none", cursor:"pointer", fontSize:14, color:"rgba(255,255,255,0.35)" }}>
                    {showPass?"🙈":"👁️"}
                  </button>
                </div>
              </div>

              {error && <div style={{ fontSize:12, color:"#f87171", background:"rgba(244,63,94,0.1)", border:"1px solid rgba(244,63,94,0.25)", borderRadius:8, padding:"8px 12px" }}>{error}</div>}
              {success && <div style={{ fontSize:12, color:"#34d399", background:"rgba(52,211,153,0.1)", border:"1px solid rgba(52,211,153,0.25)", borderRadius:8, padding:"8px 12px" }}>{success}</div>}

              <button type="submit" disabled={adding}
                style={{ padding:"11px", borderRadius:10, border:"none", background:"linear-gradient(135deg,#7c3aed,#06b6d4)", color:"#fff", fontWeight:700, fontSize:13, cursor:"pointer", boxShadow:"0 4px 20px rgba(124,58,237,0.3)", transition:"all 0.2s" }}>
                {adding ? "Adding…" : "+ Add User"}
              </button>
            </form>
          </div>

          {/* Info */}
          <div style={{ fontSize:11, color:"rgba(255,255,255,0.2)", background:"rgba(255,255,255,0.02)", border:"1px solid rgba(255,255,255,0.04)", borderRadius:8, padding:"10px 12px" }}>
            💡 Regular users have access to all pipeline modules but cannot see or edit API keys. User data is stored in this browser's localStorage.
          </div>
        </div>
      </div>
    </>
  );
}
