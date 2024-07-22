const Article = ({
    abstract,
    id,
    title,
    handleArticleDetails,
    showArticleDetails
}) => {
    return (
        <div onClick={handleArticleDetails} data-testid="article-id">
            <h3>{title}</h3>
            {showArticleDetails === id && <p data-testid="article-detail">{abstract}</p>}
        </div>
    )
}

export default Article