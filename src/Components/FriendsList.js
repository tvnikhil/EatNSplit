import Friend from "./Friend";

function renderFriends(data, onIsSplit, isSplit, hideAddFrnd) {
  const friends = [];
  for (let i = 0; i < data.length; i++) {
    friends.push(
      <Friend
        key={i}
        id={data[i].id}
        name={data[i].name}
        image={data[i].image}
        balance={data[i].balance}
        onIsSplit={onIsSplit}
        isSplit={isSplit}
        hideAddFrnd={hideAddFrnd}
      />
    );
  }
  return friends;
}

export default function FriendsList({ data, onIsSplit, isSplit, hideAddFrnd }) {
  return <ul>{renderFriends(data, onIsSplit, isSplit, hideAddFrnd)}</ul>;
}
