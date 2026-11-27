import React from "react";

export default function MealDetailsPage(props) {
  return (
    <main>
      <h1>MealDetailsPage - {props.params.mealSlug}</h1>
    </main>
  );
}
