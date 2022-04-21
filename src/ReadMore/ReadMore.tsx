import React, {useState} from 'react';
import {ReadMoreContainer, ReadOrHide} from "./ReadMore.styles";

const ReadMore = ({children}: { children: string }) => {
	const text = children
	const [openReadMore, setOpenReadMore] = useState(false)
	const toggleReadMore = () => {
		setOpenReadMore(!openReadMore)
	}
	return (
		<ReadMoreContainer>
			{openReadMore ? text : text.slice(0, 100)}
			<ReadOrHide
				onClick={toggleReadMore}>{text.length < 100 ? "" : openReadMore ? "Show Less" : "... Read More"}</ReadOrHide>
		</ReadMoreContainer>
	)
}

export default ReadMore;
