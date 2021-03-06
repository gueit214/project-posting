import React, { useContext } from "react";
import MyButton from "./MyButton";
import { DispatchContext } from "../App";
import { useNavigate } from "react-router-dom";

const ContentItem = ({ Id, date, content }) => {
  const navigate = useNavigate();
  let notDeleteBtn = false;

  const { onDelete } = useContext(DispatchContext);
  const handleDelete = () => {
    notDeleteBtn = true;
    if (window.confirm("정말 삭제하시겠습니까?")) {
      onDelete(Id);
    } else {
      return;
    }
  };

  const gotoContent = () => {
    if (!notDeleteBtn) {
      navigate(`/contentview/${Id}`);
    }
  };

  return (
    <div className="ContentItem" onClick={gotoContent}>
      <div className="date">
        {new Date(parseInt(date)).toLocaleDateString()}
      </div>
      <div className="content">{content}</div>
      <MyButton
        text="삭제하기"
        onClick={handleDelete}
        bootstrapClass={"btn btn-outline-danger"}
      />
    </div>
  );
};

export default ContentItem;
