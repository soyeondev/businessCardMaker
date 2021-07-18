import React from "react";
import Card from "../card/card";
import CardAddForm from "../card_add/card_add_form";
import CardEditForm from "../card_edit/card_edit_form";
import styles from "./editor.module.css";

const Editor = ({ FileInput, cards, addCard, updateCard }) => (
  <section className={styles.editor}>
    <h1 className={styles.title}>Card Maker</h1>
    {Object.keys(cards).map((key) => (
      <CardEditForm
        key={key}
        FileInput={FileInput}
        card={cards[key]}
        updateCard={updateCard}
      />
    ))}
    <CardAddForm FileInput={FileInput} onAdd={addCard} />
  </section>
);

export default Editor;
