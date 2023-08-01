import { Icon } from "@chakra-ui/react";

const AccountIcon = (props) => (
    <Icon viewBox="0 0 14 14" boxSize={4} {...props}>
        <path
          fill="currentColor"
          d="M7 3a2.5 2.5 0 100 5 2.5 2.5 0 000-5zm0 4a1.5 1.5 0 110-3 1.5 1.5 0 010 3z"
        />
        <path
          fill="currentColor"
          d="M7 0a7 7 0 107 7 7.008 7.008 0 00-7-7zM4 12.188V11.5A1.502 1.502 0 015.5 10h3a1.502 1.502 0 011.5 1.5v.688a5.949 5.949 0 01-6 0zm6.996-.725A2.5 2.5 0 008.5 9h-3a2.5 2.5 0 00-2.496 2.463 6 6 0 117.992 0z"
        />
    </Icon>
  );

export default AccountIcon