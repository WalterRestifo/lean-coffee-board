import Form from "../components/Form";
import Header from "../components/Header";
import { useState } from "react";
import Card from "../components/Card";

export default function HomePage() {
  const [list, setList] = useState([
    {
      thought: "will I work correctly?",
      author: "Walter",
    },
    {
      thought: "I hope so",
      author: "wieder Walter",
    },
  ]);

  function handleAddNewListObj(newListObj) {
    setList([...list, newListObj]);
  }

  return (
    <>
      <Header />
      <ul>
        {list.map(({ thought, author }) => {
          return <Card key={thought} thought={thought} author={author} />;
        })}
      </ul>
      <hr />
      <Form onAddNewListObj={handleAddNewListObj} />
    </>
  );
}
