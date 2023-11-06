import { useState } from "react";
import arrow from "../assets/arrow.png";

// AccordionItem représente un élément de l'accordéon. Le composant reçoit deux propriétés : title et content
function AccordionItem({ title, content }) {
  // l'état initial de composant est "fermé". Il change d'état (ouvert ou fermé) en fonction du clique sur le header qui modifie le useState (true ou false) pour indiquer si isExpanded ou pas. Cela ajoute ou enlève la classe "expanded" à la div "accordion-content" pour modifier le style du contenu et l'afficher ou le cacher
  const [isExpanded, setIsExpanded] = useState(false);

  const toggleAccordion = () => {
    setIsExpanded(!isExpanded);
  };

  return (
    <>
      <div className="accordion-header" onClick={toggleAccordion}>
        <h3>{title}</h3>
        <img
          src={arrow}
          alt="Collapsed"
          className={`arrow ${isExpanded ? "rotate" : ""}`}
        ></img>
      </div>
      <div className={`accordion-content ${isExpanded ? "expanded" : ""}`}>
        {content}
      </div>
    </>
  );
}

// le composant Accordion doit recevoir des props, dans ce cas, un data. Dans la div "collapse", les données sont mappées et pour chaque index identifié un élément AccordionItem est créé avec le title et le content correspondant 
function Accordion({ data }) {
    return (
      <div className="collapse">
        {data.map((item, index) => (
          <AccordionItem
            key={index}
            title={item.title}
            content={item.content}
          />
        ))}
      </div>
    );
}

export default Accordion;
