class ArticleList extends React.Component {
    constructor(props) {
        super(props)

        this.state = {articles: []}
    }

    componentDidMount() {
        this.setState({articles: Seeds.articles})
    }

    render() {
        const articleList = this.state.articles.map(article => (
            <Article
                key={article.id}
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
            <div className="article">
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
                <div className="delimiter"></div>
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