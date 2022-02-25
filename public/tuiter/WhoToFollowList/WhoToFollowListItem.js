const WhoToFollowListItem = (who) => {
    return(`
        <li class="list-group-item">
                    <div class="row">
                        <div class="col-2">
                            <img class="wd-follow-img" src=${who.avatarIcon}>
                        </div>

                        <div class="col-6 ml-0 p-0 wd-left-margin-5px">
                            <span class="fw-bold"> ${who.userName}
                             <i class="fas fa-check-circle"></i>
                            </span><br/>
                            <span class="wd-darker-gray">@${who.handle}</span><br/>
                        </div>
                        <div class="col-3 m-0">
                            <button class="btn btn-primary rounded-pill wd-follow-btn">
                                Follow
                            </button>
                        </div>
                    </div>
                </li>
    `);
}

export default WhoToFollowListItem;