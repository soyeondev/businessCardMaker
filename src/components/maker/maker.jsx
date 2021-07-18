import React, { useEffect, useState } from "react";
import { useHistory } from "react-router-dom";
import Editor from "../editor/editor";
import Footer from "../footer/footer";
import Header from "../header/header";
import Preview from "../preview/preview";
import styles from "./maker.module.css";

const Maker = ({ FileInput, authService }) => {
  const [cards, setCards] = useState([
    {
      id: "0",
      name: "angela1",
      company: "Company",
      theme: "light",
      title: "Software Engineer",
      email: "abc@gmail.com",
      message: "go for it",
      fileName: "abc",
      fileURL: null,
    },
    {
      id: "1",
      name: "angela2",
      company: "Company",
      theme: "dark",
      title: "Software Engineer",
      email: "abc@gmail.com",
      message: "go for it",
      fileName: "abc",
      fileURL: "ellie.png",
    },
    {
      id: "2",
      name: "angela3",
      company: "Company",
      theme: "colorful",
      title: "Software Engineer",
      email: "abc@gmail.com",
      message: "go for it",
      fileName: "abc",
      fileURL: null,
    },
  ]);
  const history = useHistory();
  const onLogout = () => {
    authService.logout();
  };

  useEffect(() => {
    authService.onAuthChange((user) => {
      if (!user) {
        history.push("/");
      }
    });
  });

  const createOrUpdateCard = (card) => {
    console.log("createOrUpdateCard");
    console.log("createOrUpdateCard card: ", card);
    setCards((cards) => {
      console.log("cards: ", cards);
      const updated = { ...cards };
      console.log("updated cards: ", updated);
      updated[card.id] = card;
      return updated;
    });
  };

  // const addCard = (card) => {
  //   const updated = [...cards, card];
  //   setCards(updated);
  // };

  return (
    <section className={styles.maker}>
      <Header onLogout={onLogout} />
      <div className={styles.container}>
        <Editor
          FileInput={FileInput}
          cards={cards}
          addCard={createOrUpdateCard}
          updateCard={createOrUpdateCard}
        />
        <Preview cards={cards} />
      </div>
      <Footer />
    </section>
  );
};

export default Maker;
