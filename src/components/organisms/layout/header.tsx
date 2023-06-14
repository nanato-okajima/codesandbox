/* eslint-disable react-hooks/exhaustive-deps */
import { FC, memo, useCallback } from "react";
import { useNavigate } from "react-router-dom";
import { Box, Flex, Heading, Link, useDisclosure } from "@chakra-ui/react";

import { MenuIconButton } from "../../atoms/button/MenuIconButton";
import { MenuDrawer } from "../../molecules/MenuDrawer";

export const Header: FC = memo(() => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const navigation = useNavigate();

  const onClickHome = useCallback(() => navigation("/home"), []);
  const onClickUserManagement = useCallback(
    () => navigation("/home/user_management"),
    []
  );
  const onClickSetting = useCallback(() => navigation("/home/setting"), []);

  return (
    <>
      <Flex
        as="nav"
        bg="teal.500"
        color="gray.50"
        align="center"
        justify="space-between"
        padding={{ base: 3, md: 5 }}
      >
        <Flex align="center" as="a" mr={8} _hover={{ cursor: "pointer" }}>
          <Heading
            as="h1"
            fontSize={{ base: "md", md: "lg" }}
            onClick={onClickHome}
          >
            ユーザ管理アプリ
          </Heading>
        </Flex>
        <Flex
          align="center"
          fontSize="sm"
          flexGrow={2}
          display={{ base: "None", md: "flex" }}
        >
          <Box pr={4}>
            <Link onClick={onClickUserManagement}>ユーザー一覧</Link>
          </Box>
          <Link onClick={onClickSetting}>設定</Link>
        </Flex>
        <MenuIconButton onOpen={onOpen} />
      </Flex>
      <MenuDrawer
        onClose={onClose}
        isOpen={isOpen}
        onClickHome={onClickHome}
        onClickSetting={onClickSetting}
        onClickUserManagement={onClickUserManagement}
      />
    </>
  );
});
