import * as React from 'react';
import { HelpProps } from '../../../../types/dataTypes';


export const Help = ({ i18n }: HelpProps) => (
	<p>{i18n.help}</p>
);
