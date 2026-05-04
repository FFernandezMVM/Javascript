const CommentStorage = {
    getComments() {
        return JSON.parse(localStorage.getItem('userComments')) || [];
    },
    saveComment(name, text) {
        const comments = this.getComments();
        comments.push({name, text});
        localStorage.setItem('userComments', JSON.stringify(comments));
    }
};