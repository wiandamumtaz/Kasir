var MyClass = React.createClass({
  render: function() {
    return (

      <form className="form">
        <p>Login</p>
        <div className="group">
          <input required="true" className="main-input" type="text" />
          <span className="highlight-span" />
          <label className="lebal-email">Email</label>
        </div>
        <div className="container-1">
          <div className="group">
            <input required="true" className="main-input" type="text" />
            <span className="highlight-span" />
            <label className="lebal-email">password</label>
          </div>
        </div>
        <button className="submit">submit</button>
      </form>
    );
  }
});