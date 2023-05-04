const observer = new MutationObserver(function(mutationsList) {
    for (let mutation of mutationsList) {
      if (mutation.type === 'childList' && mutation.addedNodes.length > 0) {
        console.log("RANNN")
        const likes = document.querySelector("#app > div > div.main__2_tD > div.content__3fR6 > div > div.side-tools-wrapper__1TS9 > div > div.css-1gd46d6-Container.e5i1odf0 > div.css-jtoecv > div > div.tab-pane__ncJk.css-1eusa4c-TabContent.e5i1odf5 > div > div.css-101rr4k > div.css-10o4wqw > button:nth-child(2) > span")
        const dislikes = document.querySelector("#app > div > div.main__2_tD > div.content__3fR6 > div > div.side-tools-wrapper__1TS9 > div > div.css-1gd46d6-Container.e5i1odf0 > div.css-jtoecv > div > div.tab-pane__ncJk.css-1eusa4c-TabContent.e5i1odf5 > div > div.css-101rr4k > div.css-10o4wqw > button:nth-child(3) > span")
        if (likes) {
          likes.style.display = 'none';
        }
        if (dislikes) {
          dislikes.style.display = 'none';
        }
        if (likes && dislikes) {
          observer.disconnect();
        }
      }
    }
  });
  
  observer.observe(document.body, { childList: true, subtree: true });
  