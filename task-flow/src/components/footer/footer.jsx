/* eslint-disable react/no-unescaped-entities */
// Ce composant est utilisé pour afficher le champ de saisie de tâche.
import styles from "./Footer.module.css"
export const Footer = ({completedTask}) => {
  if (completedTask)
  {
       return (
    <footer>
        <code className={styles.footer}>Avec Taskflow t'as eliminee {completedTask} tache 
        {completedTask > 1 ? "s" : null} ! </code>
    </footer>

  );
  }
 return null;
};
