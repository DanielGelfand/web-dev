const PostSummaryItem = (post) => {

    return (`
  
        <li class="list-group-item">
            <div>
                <img width="100px" height="100px" style="float: right; border-radius: 10px;" src=${post.image}/>
                <span class="wd-darker-gray">${post.topic}</span>${post.topic ? `</br>` : ""}
                <b>${post.userName} <i class="fas fa-check-circle"></i></b>
                <span class="wd-darker-gray"> - ${post.time}</span><br/>
                <b>
                    ${post.title}
                </b>
            </div>

        </li>
    `)

}

export default PostSummaryItem;