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
            <div>
                <h2>Article title</h2>
                <div>
                    Lead TextLead TextLead TextLead TextLead TextLead TextLead TextLead TextLead TextLead TextLead TextLead TextLead TextLead TextLead TextLead TextLead TextLead TextLead TextLead TextLead TextLead Text
                </div>
                <p>Author: Kitty Man</p>
                <p>2020/07/14</p>
            </div>
        )
    }
}


ReactDOM.render(
    <ArticleList />,
    document.querySelector('#app')
)