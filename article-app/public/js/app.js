class ArticleList extends React.Component {
    render() {
        return(
            <div className="articleWraper">
                <Article />
            </div>
        )
    }
}

class Article extends React.Component {
    render() {
        return(
            <div className="article">
                <div className="articleHead">
                    <div className="articleImage">
                        <img src="../images/evil_cat.jpg" />
                    </div>
                    <div className="articleTitleWrapper">
                        <h2 className="articleTitle">
                            Article title Article title Article titleArticle titleArticle titleArticle titleArticle titleArticle titleArticle titleArticle titleArticle titleArticle title
                        </h2>
                    </div>
                </div>
                <div className="delimiter"></div>
                <div className="articleLead">
                    Lead TextLead TextLead TextLead TextLead TextLead TextLead TextLead TextLead TextLead TextLead TextLead TextLead TextLead TextLead TextLead TextLead TextLead TextLead TextLead TextLead TextLead Text
                </div>
                <p className="articleAuthor">Author: Kitty Man</p>
            </div>
        )
    }
}


ReactDOM.render(
    <ArticleList />,
    document.querySelector('#app')
)