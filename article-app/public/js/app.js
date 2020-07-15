class ArticleList extends React.Component {
    constructor(props) {
        super(props)

        this.state = {articles: []}
    }

    componentDidMount() {
        this.setState({articles: Seeds.articles})
    }

    render() {
        const articles = this.state.articles.sort((a, b) => b.clickCount - a.clickCount)

        const articleList = articles.map((article, i) => (
            <Article
                key={article.id}
                classes={i === 0 ? 'article lead' : 'article'}
                image={article.image}
                title={article.title}
                lead={article.lead}
                author={article.author}
            />
        ))
        return(
            <div className="articleWraper">
                {articleList}
            </div>
        )
    }
}

class Article extends React.Component {
    render() {
        return(
            <div className={this.props.classes}>
                <div className="articleHead">
                    <div className="articleImage">
                        <img src={this.props.image} />
                    </div>
                    <div className="articleTitleWrapper">
                        <h2 className="articleTitle">
                            {this.props.title}
                        </h2>
                    </div>
                </div>
                <div className="articleLead">
                    {this.props.lead}
                </div>
                <p className="articleAuthor">Author: {this.props.author}</p>
            </div>
        )
    }
}


ReactDOM.render(
    <ArticleList />,
    document.querySelector('#app')
)