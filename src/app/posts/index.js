import React, { useState, useEffect, Fragment } from 'react';
import { 
  PostWrapper, 
  PostsArticle, 
  PostsFeedback, 
  PostUser, 
  PostUserImage, 
  PostsUserData, 
  PostsImage, 
  PostsPreview,
  PostsFeedbackImage
} from './styles';
import { getPosts } from '../../api'

function Posts () {
  const [state, setState] = useState([])
  const [loading, setLoading] = useState(false)

  useEffect(() => {
    setLoading(true)
    getPosts().then((data) => {
      setState(data)
    })
    .finally(() => {
      setLoading(false)
    })
  }, [])

  return(
    <PostWrapper> 
      <h3>
        Latest
      </h3>
      {loading 
        ? <div>cargando...</div> 
        : <>
          {state.map((item) => {
            return (
              <PostsArticle key={item.id}>
                <PostUser>
                  <PostUserImage> 
                    <img src="./user.png" alt="avatar" />   
                  </PostUserImage>
                  <PostsUserData>
                    <p> Daniel Bustos </p>
                    <span> May 5 - 10 Min Read</span>
                  </PostsUserData>
                </PostUser>
                <PostsImage>
                  <img src='./mac.jpg' alt='imagen' />
                </PostsImage>
                <PostsPreview> 
                  <h2>
                    {item.title}
                  </h2>   
                  <p>{item.body}</p>    
                  <button> 
                    Read More...
                  </button>
                </PostsPreview>
                <PostsFeedback>
                  <PostsFeedbackImage>
                    <img src="/claps.jpg" alt="" />
                    <p> 1,4K </p>
                  </PostsFeedbackImage>
                  <PostsFeedbackImage>
                    <p>7 respones</p>
                    <img src="/guardado.jpg" alt="" />
                  </PostsFeedbackImage>  
                </PostsFeedback>
              </PostsArticle>
            )
          })}
        </>
        
      }
    </PostWrapper>
  );
};

export { Posts };