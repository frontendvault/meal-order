import { useRef } from "react";
import {
	NumberInput,
	Group,
	ActionIcon,
	rem,
} from "@mantine/core";
const Counter = ({ value, setValue }) => {
	const handlers = useRef();

	return (
		<Group spacing={12}>
			<ActionIcon
				size={40}
				variant="default"
				onClick={() => handlers.current.decrement()}
			>
				–
			</ActionIcon>

			<NumberInput
				hideControls
				value={value}
				onChange={(val) => setValue(val)}
				handlersRef={handlers}
				step={1}
				styles={{ input: { width: rem(54), textAlign: "center" } }}
			/>

			<ActionIcon
				size={40}
				variant="default"
				onClick={() => handlers.current.increment()}
			>
				+
			</ActionIcon>
		</Group>
	);
};

export default Counter