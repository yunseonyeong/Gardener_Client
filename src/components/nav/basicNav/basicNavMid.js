import getImgUrl from "../../../globalLogic";

const BasicNavMid = () => {
  return (
    <div className="basicNavMid">
      <div className="titles">
        <div className="title" alt="gardener">
          <img src={getImgUrl("gardener")} />
        </div>
        <div className="sectitle" alt="nopainnogarden">
          <img src={getImgUrl("basicsubtitle")} />
        </div>
      </div>
    </div>
  );
}

export default BasicNavMid;