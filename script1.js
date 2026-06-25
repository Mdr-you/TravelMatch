function rechercheDestination() {

  let budget = document.getElementById("budget").value; // Récupère la valeur du budget sélectionné par l'utilisateur
  let climat = document.getElementById("climat").value; // Récupère la valeur du climat sélectionné par l'utilisateur
  let activite = document.getElementById("activite").value; // Récupère la valeur de l'activité sélectionnée par l'utilisateur

  if (budget == "600-1200" && climat == "froid" && activite == "nature") {
    window.location.href = "canada.html";
  }

  else if (budget == "1200-2500" && climat == "froid" && activite == "nature") {
    window.location.href = "norvege.html";
  }

  else if (budget == "600-1200" && climat == "chaud" && activite == "plage") {
    window.location.href = "grece.html";
  }

  else if (budget == "1200-2500" && climat == "chaud" && activite == "plage") {
    window.location.href = "maldives.html";
  }

  // SI aucun choix ne correspond
  else {
    document.querySelector(".destinations") /* Sélectionne l'élément avec la classe "destinations" */
      .scrollIntoView({ behavior: "smooth" });/* Fait défiler la page jusqu'à cet élément de manière fluide */
  }
}