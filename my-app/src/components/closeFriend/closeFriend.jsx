import "./closeFriend.css";

const PF = import.meta.env.VITE_PUBLIC_FOLDER;

export default function CloseFriend({ user }) {
  return (
    <li className="sidebarFriend">
      <img
        className="sidebarFriendImg"
        src={`${PF}/${user.profilePicture}`}
        alt=""
      />
      <span className="sidebarFriendName">{user.username}</span>
    </li>
  );
}
