const heading1 = React.createElement("h1", {className: "heading1", id: "classHeading1"}, "Thi is Heading1.")
      const para1 = React.createElement("p", {className: "para1"}, "This is Para1")
      const container1 = React.createElement("div", {className: "container1"}, heading1, para1)

      const heading2 = React.createElement("h1", {className: "heading2"}, "This is Heading2.")
      const para2 = React.createElement("h2", {className: "para2"}, "This is Para2.")
      const container2 = React.createElement("div", {className: "container2"}, heading2, para2)

      
    //   console.log(container)
      
      const container3 = React.createElement("div", {}, [
          React.createElement("h1", {}, "Hello1"),
          React.createElement("h1", {}, "Hello2"),
        ])
        const container = React.createElement("div", {className: "container"}, container1, container2, container3)

      const root = ReactDOM.createRoot(document.getElementById("root"))
      root.render(container)