function Tags ({ tagsListe }) {
    return (
        <div className="tags-container">
        {tagsListe.map((tag, index) => (
          <span className="tag" key={index}>
            {tag}
          </span>
        ))}
      </div>
    );
  }
  
  export default Tags;
  