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
                <div className="articleTitleWrapper">
                    <h2 className="articleTitle">
                        Article title Article title Article titleArticle titleArticle titleArticle titleArticle titleArticle titleArticle titleArticle titleArticle titleArticle title
                    </h2>
                </div>
                <div className="delimiter"></div>
                <div className="articleLead">
                    Lead TextLead TextLead TextLead TextLead TextLead TextLead TextLead TextLead TextLead TextLead TextLead TextLead TextLead TextLead TextLead TextLead TextLead TextLead TextLead TextLead TextLead Text
                </div>
                <p className="articleAuthor">Author: Kitty Man</p>
                <p className="articleDate">2020/07/14</p>
            </div>
        )
    }
}


ReactDOM.render(
    <ArticleList />,
    document.querySelector('#app')
)