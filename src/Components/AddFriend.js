import Button from "./Button";

export default function AddFriend({
  frndName,
  onFrndName,
  imgUrl,
  onImgUrl,
  onAddFrndsData,
  onIsShowAddFriend,
}) {
  function handleSubmit(frndName, imgUrl) {
    if (frndName === "") return;
    const id = Date.now();
    if (imgUrl.length === 0) {
      imgUrl = "https://i.pravatar.cc/48?u=" + id;
    }
    const newFrnd = {
      id: id,
      name: frndName,
      image: imgUrl,
      balance: 0,
    };
    onAddFrndsData(newFrnd);
    onFrndName("");
    onImgUrl("");
    onIsShowAddFriend();
  }

  return (
    <form className="form-add-friend">
      <label>👯Friend name</label>
      <input
        type="text"
        value={frndName}
        onChange={(e) => onFrndName(e.target.value)}
      ></input>

      <label>🌆Image URL</label>
      <input
        type="text"
        value={imgUrl}
        onChange={(e) => onImgUrl(e.target.value)}
      ></input>

      <Button onClick={() => handleSubmit(frndName, imgUrl)}> Add </Button>
    </form>
  );
}
