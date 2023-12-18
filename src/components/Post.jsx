import { useEffect, useState } from "react";

import "../styles/Post.css";

export function Post(props) {

	const [mediaJsx, setMediaJsx] = useState(null);

	useEffect(() =>  {
		console.log(props);
		if (mediaJsx == null && props.post.mediaSrc != null) {
			if (props.post.type == "IMAGE") {
				console.log(props.post.mediaSrc);
				setMediaJsx(() => {
					return(
					<div>
						<img src={props.post.mediaSrc} className="post-photo" />
					</div>
					);
				});
			} else if (props.post.type == "video") {
				setMediaJsx(<video src={props.post.mediaSrc} className="post-video" controls />);
			}
		}
	})

	return (
		<div className="post">
			<div className="post-header" onClick={() => {
				props.setOtherUser(props.post.User);
				props.setPage("profile");
				console.log(props.post.User)
			}}>
				{props.post.User.name}
			</div>
			{mediaJsx}
			<div className="post-text">{props.post.caption}</div>
		</div>
	);
} 