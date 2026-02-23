(function () {
   // Single list: paths are relative to site root
   var links = [
      { id: "home", path: "index.html", label: "Home" },
      {
         id: "regular",
         path: "regular-membership-application/regular-membership-application.html",
         label: "Regular Membership",
      },
      {
         id: "farmer",
         path: "membership-form/Form.html",
         label: "Farmer Application",
      },
      {
         id: "development",
         path: "membership-form/development-plan.html",
         label: "Development Plan",
      },
   ];

   function hrefFor(folder, rootPath) {
      if (folder === "root") return rootPath;
      var prefix =
         folder === "membership-form" ? "membership-form/" : (
            "regular-membership-application/"
         );
      if (rootPath.indexOf(prefix) === 0) return rootPath.slice(prefix.length);
      return "../" + rootPath;
   }

   var placeholder = document.querySelector(".site-nav-placeholder");
   if (!placeholder) return;
   var current = (
      placeholder.getAttribute("data-current") || "home"
   ).toLowerCase();
   var folder = (
      placeholder.getAttribute("data-folder") || "root"
   ).toLowerCase();

   var html =
      '<nav class="site-nav" aria-label="Main"><div class="site-nav-inner">';
   for (var i = 0; i < links.length; i++) {
      var link = links[i];
      var active = link.id === current ? ' class="active"' : "";
      html +=
         '<a href="' +
         hrefFor(folder, link.path) +
         '"' +
         active +
         ">" +
         link.label +
         "</a>";
   }
   html += "</div></nav>";
   placeholder.outerHTML = html;
})();
