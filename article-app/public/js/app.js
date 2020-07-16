class ArticleList extends React.Component {
    constructor(props) {
        super(props)

        this.state = {articles: []}
        this.handleClasses = this.handleClasses.bind(this)
    }

    componentDidMount() {
        this.setState({articles: Seeds.articles})
    }

    handleClasses(id) {
        return function (obj) {
            document.querySelector('#' + id).classList.add('bigArticle')
        }
    }

    render() {
        const articles = this.state.articles.sort((a, b) => b.clickCount - a.clickCount)

        const articleList = articles.map((article, i) => (
            <Article
                key={article.id}
                classes={i === 0 ? 'article lead' : 'article'}
                id={'article-' + article.id}
                image={article.image}
                title={article.title}
                lead={article.lead}
                text={article.text}
                author={article.author}
                handleClasses={this.handleClasses('article-' + article.id)}
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
            <div id={this.props.id} className={this.props.classes} onClick={this.props.handleClasses}>
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

                <div className='articleText'>
                    {this.props.text}
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