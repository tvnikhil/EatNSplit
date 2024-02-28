import { useState } from "react";
import AddFriend from "./AddFriend";
import FriendsList from "./FriendsList";
import SplitBill from "./SplitBill";
import Button from "./Button";
import "./index.css";

const initialFriends = [
  {
    id: 118836,
    name: "Clark",
    image: "https://i.pravatar.cc/48?u=118836",
    balance: -7,
  },
  {
    id: 933372,
    name: "Sarah",
    image: "https://i.pravatar.cc/48?u=933372",
    balance: 20,
  },
  {
    id: 499476,
    name: "Anthony",
    image: "https://i.pravatar.cc/48?u=499476",
    balance: 0,
  },
  {
    id: 984802,
    name: "Akhil",
    image:
      "https://media.licdn.com/dms/image/C5603AQEvlNX2pmrGoA/profile-displayphoto-shrink_800_800/0/1648183316140?e=2147483647&v=beta&t=DL7ZAunJtWAtxGNz6d2ZDX4wz_bLW4dmkxFyf7eU3jo",
    balance: 0,
  },
];

export default function App() {
  const [isSplit, setIsSplit] = useState(0);
  const [frndName, setFrndName] = useState("");
  const [imgUrl, setImgUrl] = useState("");
  const [frndsData, setFrndsData] = useState([...initialFriends]);
  const [isShowAddFrnd, setIsShowAddFriend] = useState(0);

  function handleIsSplit(id) {
    if (isSplit === id) {
      setIsSplit((isSp) => 0);
    } else if (isSplit === 0) {
      setIsSplit((isSp) => id);
    } else {
      setIsSplit((isSp) => 0);
      setIsSplit((isSp) => id);
    }
  }

  function handleFrndName(name) {
    setFrndName((fN) => name);
  }

  function handleImgUrl(temp) {
    setImgUrl((url) => temp);
  }

  function addFrndData(frnd) {
    setFrndsData((d) => [...d, frnd]);
  }

  function changeFrndsData(newData) {
    setFrndsData((d) => newData);
  }

  function handlesetIsShowAddFriend() {
    setIsSplit((id) => (id = 0));
    if (isShowAddFrnd === 0) setIsShowAddFriend((flag) => (flag = 1));
    else setIsShowAddFriend((flag) => (flag = 0));
  }

  function hideAddFrnd() {
    setIsShowAddFriend((flag) => (flag = 0));
  }

  return (
    <div className="app">
      <div className="sidebar">
        <FriendsList
          data={frndsData}
          onIsSplit={handleIsSplit}
          isSplit={isSplit}
          hideAddFrnd={hideAddFrnd}
        />
        {isShowAddFrnd !== 0 && (
          <AddFriend
            frndName={frndName}
            onFrndName={handleFrndName}
            imgUrl={imgUrl}
            onImgUrl={handleImgUrl}
            onAddFrndsData={addFrndData}
            onIsShowAddFriend={handlesetIsShowAddFriend}
          />
        )}
        <ul>
          <li>
            <Button onClick={handlesetIsShowAddFriend}>
              {isShowAddFrnd !== 0 ? "Close" : "Add Friend"}
            </Button>
          </li>
        </ul>
      </div>
      {isSplit > 0 && (
        <SplitBill
          id={isSplit}
          data={frndsData}
          setData={changeFrndsData}
          onIsSplit={handleIsSplit}
        />
      )}
    </div>
  );
}
