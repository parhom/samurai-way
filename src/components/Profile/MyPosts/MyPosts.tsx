import React from "react";
import {Post} from "./Post/Post";

export type PostsType = {
	id: string
	title: string
}

export const MyPosts = () => {
	const posts:PostsType[] = [
		{id:'1', title: 'Post 1'},
		{id:'2', title: 'Post 2'},
		{id:'3', title: 'Post 3'},
	]

	return (
		<div>
			My Post
			<div>
				<textarea></textarea>
				<button>Add post</button>
			</div>
			<div>
				{posts.map(post => {
					return(
						<Post id={post.id} title={post.title}/>
					)
				})}
			</div>
		</div>
	)
}