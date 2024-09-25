import React from "react";
import { MdEmail, MdLock } from "react-icons/md";
import { IoIosPerson } from "react-icons/io";
import { Button } from "../../components/Button";
import { Header } from "../../components/Header";
import { Input } from "../../components/Input";
import {
  Column,
  Container,
  CriarText,
  GreenText,
  Row,
  SubTitleLogin,
  Title,
  TitleLogin,
  WhiteText,
  Wrapper,
} from "./styles";
import { useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import { api } from "../../services/api";

const schema = yup
  .object({
    email: yup.string().email("Email inválido").required("Campo obrigatório"),
    password: yup
      .string()
      .min(3, "No mínimo 3 caracteres.")
      .required("Campo obrigatório"),
  })
  .required();

const Register = () => {
  const navigate = useNavigate();

  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
    mode: "onChange",
  });

  const handleLogin = () => {
    navigate("/login");
  };

  const onSubmit = async (formData) => {
    try {
      await api.post("/users", {
        name: formData.name,
        email: formData.email,
        password: formData.password,
      });
      
      alert("Conta criada com sucesso!");
      navigate("/login");
    } catch (error) {
      alert("Erro ao criar a conta, tente novamente.");
      console.error("Erro:", error);
    }
  };


  return (
    <>
      <Header />
      <Container>
        <Column>
          <Title>
            A plataforma para você aprender com experts, dominar as principais
            tecnologias e entrar mais rápido nas empresas mais desejadas.
          </Title>
        </Column>
        <Column>
          <Wrapper>
            <TitleLogin>Comece agora grátis</TitleLogin>
            <SubTitleLogin>Crie sua conta e make the change...</SubTitleLogin>
            <form onSubmit={handleSubmit(onSubmit)}>
              <Input
                name="Nome Completo"
                errorMessage={errors.name?.message}
                control={control}
                placeholder="E-mail"
                leftIcon={<IoIosPerson />}
              />
              <Input
                name="email"
                errorMessage={errors.email?.message}
                control={control}
                placeholder="E-mail"
                leftIcon={<MdEmail />}
              />
              <Input
                name="password"
                errorMessage={errors.password?.message}
                control={control}
                placeholder="Senha"
                type="password"
                leftIcon={<MdLock />}
              />
              <Button
                title="Criar minha conta"
                variant="secondary"
                type="submit"
              />
            </form>
            <Row>
              <CriarText>
                Ao clicar em <i>"Criar uma conta grátis"</i>, declaro que li e
                aceito as Políticas de Privacidade e os termos de uso da DIO.{" "}
              </CriarText>
            </Row>
            <Row>
              <WhiteText>Já possuí uma conta?</WhiteText>
              <GreenText onClick={handleLogin}>Clique aqui</GreenText>
            </Row>
          </Wrapper>
        </Column>
      </Container>
    </>
  );
};

export { Register };
