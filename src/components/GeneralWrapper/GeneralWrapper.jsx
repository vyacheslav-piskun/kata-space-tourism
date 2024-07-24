import React, {useCallback, useState} from 'react';

import Header from "../Header/Header";
import NavMenu from "../NavMenu/NavMenu";

const GeneralWrapper = ({children}) => {
	const [opened, setOpened] = useState(false);
	const handleClosePopup = useCallback(() => {
		setOpened(false)
	}, []);

	return (
		<>
			<Header opened={opened} setOpened={setOpened} />
			<NavMenu opened={opened} onClose={handleClosePopup} />
			{children}
		</>
	);
};

export default GeneralWrapper;
