import React, { Component } from "react";

import PostItem from "./PostItem";

class PostList extends Component {
  state = {
    posts: [
      {
        id: 1,
        author: {
          name: "Mussum",
          avatar:
            "https://keenthemes.com/metronic/preview/demo5/assets/media/users/100_6.jpg"
        },
        date: "14 Mar 2020",
        content:
          "Mussum Ipsum, cacilds vidis litro abertis. Mé faiz elementum girarzis, nisi eros vermeio. Manduma pindureta quium dia nois paga. A ordem dos tratores não altera o pão duris. Paisis, filhis, espiritis santis.",
        comments: [
          {
            id: 1,
            author: {
              name: "Dilma",
              avatar:
                "https://keenthemes.com/metronic/preview/demo5/assets/media/users/100_7.jpg"
            },
            content:
              "Todos as descrições das pessoas são sobre a humanidade do atendimento, a pessoa pega no pulso, examina, olha com carinho. Então eu acho que vai ter outra coisa, que os médicos cubanos trouxeram pro brasil, um alto grau de humanidade."
          },
          {
            id: 2,
            author: {
              name: "Dilma",
              avatar:
                "https://keenthemes.com/metronic/preview/demo5/assets/media/users/100_7.jpg"
            },
            content:
              "Todos as descrições das pessoas são sobre a humanidade do atendimento, a pessoa pega no pulso, examina, olha com carinho. Então eu acho que vai ter outra coisa, que os médicos cubanos trouxeram pro brasil, um alto grau de humanidade."
          }
        ]
      },
      {
        id: 2,
        author: {
          name: "Mussum",
          avatar:
            "https://keenthemes.com/metronic/preview/demo5/assets/media/users/100_6.jpg"
        },
        date: "14 Mar 2020",
        content:
          "Mussum Ipsum, cacilds vidis litro abertis. Mé faiz elementum girarzis, nisi eros vermeio. Manduma pindureta quium dia nois paga. A ordem dos tratores não altera o pão duris. Paisis, filhis, espiritis santis.",
        comments: [
          {
            id: 3,
            author: {
              name: "Dilma",
              avatar:
                "https://keenthemes.com/metronic/preview/demo5/assets/media/users/100_7.jpg"
            },
            content:
              "Todos as descrições das pessoas são sobre a humanidade do atendimento, a pessoa pega no pulso, examina, olha com carinho. Então eu acho que vai ter outra coisa, que os médicos cubanos trouxeram pro brasil, um alto grau de humanidade."
          },
          {
            id: 4,
            author: {
              name: "Dilma",
              avatar:
                "https://keenthemes.com/metronic/preview/demo5/assets/media/users/100_7.jpg"
            },
            content:
              "Todos as descrições das pessoas são sobre a humanidade do atendimento, a pessoa pega no pulso, examina, olha com carinho. Então eu acho que vai ter outra coisa, que os médicos cubanos trouxeram pro brasil, um alto grau de humanidade."
          }
        ]
      }
    ]
  };

  render() {
    return (
      <section className="posts">
        {this.state.posts.map(post => (
          <PostItem key={post.id} data={post} />
        ))}
      </section>
    );
  }
}

export default PostList;
