import React from "react";
import {PostsType} from "../MyPosts";

export const Post = ({id, title}:PostsType) => {
	return(
		<div key={id}>
			{title}
			<span>Like</span>
		</div>
	)
}