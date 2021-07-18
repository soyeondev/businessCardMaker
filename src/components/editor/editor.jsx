import React from "react";
import Card from "../card/card";
import CardEditForm from "../card_edit/card_edit_form";
import styles from "./editor.module.css";

const Editor = ({ cards }) => (
  <section className={styles.editor}>
    <h1 className={styles.title}>Card Maker</h1>
    {cards.map((card) => (
      <CardEditForm card={card} />
    ))}
  </section>
);

export default Editor;
