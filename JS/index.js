function renderPosts(starWars, container) {
    const starwarChars = starWars.results;
    const len = starwarChars.length;
    let html = '';
  //sort the characters depending on the created by date
  starwarChars.sort((a,b)=>{return new Date(b.created)-new Date(a.created);} )
    for (let i = 0; i < len; i++) {
      html +=
        `<li class="post">
            <h2>${starwarChars[i].name} </h2>
                 <h3> Description : </h3>
                    <h4> Height : ${starwarChars[i].height}</h4>
                    <h4> Birth Year : ${starwarChars[i].birth_year}</h4>
                    <h4> Gender : ${starwarChars[i].gender}</h4>`;
    }
    // TODO: add code to display the html variable inside a ul element with id="data"
    // Hint: you can use the container parameter's innerHTML property to insert Html tags
     container.innerHTML = '<div><h1>Star War Characters :</h1><ul id = "data">' + html + '</ul></div>';
  
  
}
  renderPosts(starWars, document.getElementById('container'));
  