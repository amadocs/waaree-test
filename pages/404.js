const NotFound = () => {
  return (
    <>
      <div className='page-error'>
        <main className="no-fullpage">
          <section className='section page-error-page'>
            <div className='section-inner'>
              <div className='container'>
                <div className='not-found-content'>
                  <div className='not-found'>
                    <h1>Page Not Found</h1>
                    <p>The page you were looking for could not be found. It might have been removed, renamed, or did not exist in the first place.</p>
                  </div>
                </div>
              </div>
            </div>
          </section>
        </main>
      </div>
    </>
  )
}

export default NotFound