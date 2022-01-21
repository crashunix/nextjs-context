import { parseCookies } from "nookies";
import Head from 'next/head';
import { useForm, Controller } from "react-hook-form";
import { useContext, useState } from "react";
import AuthContext from "../../stores/authContext";
import { isTokenExpired } from "../../util/auth";
import EmptyLayout from "../../layouts/empty";
import { Button, Checkbox, FormControl, FormControlLabel, FormGroup, IconButton, Input, InputAdornment, InputLabel, TextField } from "@material-ui/core";
import { Visibility, VisibilityOff, Language } from "@mui/icons-material";
import Image from 'next/image';
import AlertIcon from '../../public/icons/alert.svg';
import ChevronLeft from '../../public/icons/chevron-left.svg';

const HelperText = ({ ...props }) => {
  return <div className="w-full mt-2 flex items-center justify-center text-bl-dark-blue font-bold">{props.icon}<span className="ml-1 text-sm">{props.text}</span></div>;
}

export default function Home({ ...props }) {

  const { register, handleSubmit, control, formState: { errors } } = useForm({
    defaultValues: {
      email: '',
      password: '',
      remember: false
    }
  });

  const { signin, loading, error } = useContext(AuthContext);

  const [showPassword, setShowPassword] = useState(false);
  const [password, setPassword] = useState(''); // Apenas para o input de senha funcionar corretamente

  const [screen, setScreen] = useState('login');

  const onSubmitLogin = ({ email, password, remember }) => {
    console.log(email, password, remember);
    signin({ email, password });
  }

  const onSubmitRemember = ({ email }) => {
    console.log(email);
  }

  return (
    <>
      <Head>
        <title>Bem-vindo ao Portal RH</title>
      </Head>
      <div className="bg-bl-background bg-login-background bg-cover bg-center bg-no-repeat font-asap relative">
        <a href="#" className="flex items-center absolute top-10 left-16 text-white space-x-2">
          <Language />
          <span className="text-medium">SITE INSTITUCIONAL</span>
        </a>
        <div className="px-4 container mx-auto h-screen max-w-5xl">
          <div className="grid grid-cols-1 md:grid-cols-2 h-full">
            <div className="flex flex-col justify-center">
              <div style={{ width: 232, height: 69.52 }}>
                <Image width={232} height={69.52} leyout="fill" objectFit="contain" className="pointer-events-none" src="/img/bullla-white.svg" alt="" />
              </div>
            </div>
            <div className="flex flex-col justify-center">
              <div className="bg-white rounded-md self-start w-full md:max-w-md">
                <div className="pt-12 pb-16 px-14">
                  {screen === 'login' ?
                    <>
                      <h2 className="text-bl-title font-bold text-3xl leading-none">Seja bem-vindo<br />ao seu portal RH!</h2>
                      <p className="text-bl-dark-gray font-medium mt-3">Não tem acesso? <a href="#" className="font-normal underline">Fale com o Bullla</a></p>
                      <form className="mt-10" onSubmit={handleSubmit(onSubmitLogin)}>
                        <Controller
                          name="email"
                          control={control}
                          rules={{ required: true, minLength: 3 }}
                          render={({ field }) => (
                            <TextField name="email" error={!!errors.email} helperText={
                              errors.email?.type == 'required' ? <HelperText icon={<AlertIcon />} text="E-mail obrigatório" /> :
                                errors.email?.type == 'minLength' ? <HelperText icon={<AlertIcon />} text="E-mail inválido" /> :
                                  errors.email?.type == 'pattern' && <HelperText icon={<AlertIcon />} text="E-mail inválido" />
                            } label="E-mail" variant="standard" className="w-full" {...field} />
                          )}
                        />
                        <div className="mt-8">
                          <Controller
                            name="password"
                            control={control}
                            rules={{ required: true }}
                            render={({ field }) => (
                              <TextField name="password" error={!!errors.password} helperText={
                                errors.password?.type == 'required' && <HelperText icon={<AlertIcon />} text="Senha obrigatória" />
                              } label="Senha" variant="standard" className="w-full" {...field}
                                type={showPassword ? 'text' : 'password'}
                                InputProps={{
                                  endAdornment: (
                                    <InputAdornment position="end">
                                      <IconButton
                                        className="icon"
                                        aria-label="toggle password visibility"
                                        onClick={() => setShowPassword(!showPassword)}
                                        edge="end"
                                      >
                                        {!showPassword ? <VisibilityOff /> : <Visibility />}
                                      </IconButton>
                                    </InputAdornment>
                                  )
                                }} />
                            )}
                          />
                        </div>
                        {error && <div className="mt-8"><HelperText icon={<AlertIcon />} text={error} /></div>}
                        <div className="mt-8">
                          <Button disabled={!!errors.email || !!errors.password} variant="contained" color="primary" size="large" style={{ fontWeight: 'bold' }} type="submit" className="w-full">Fazer Login</Button>
                        </div>
                        <div className="flex items-center justify-between mt-9">
                          <Controller
                            name="remember"
                            control={control}
                            render={({ field }) => (
                              <FormControlLabel {...field} control={<Checkbox color="primary" />} label={<span className="text-bl-dark-gray font-bold text-sm">Lembrar de mim</span>} />
                            )}
                          />
                          <a href="#" className="text-sm font-bold text-bl-title" onClick={() => setScreen('forgot')}>Esqueceu sua senha?</a>
                        </div>
                      </form>
                    </>
                    :
                    <>
                      <h2 className="text-bl-title font-bold text-3xl leading-none">Esqueceu sua senha?</h2>
                      <p className="mt-3 text-bl-dark-gray">Insira seu e-mail associado à conta e enviaremos um link para você alterar sua senha</p>
                      <p className="text-bl-dark-gray font-medium mt-6">Não tem acesso? <a href="#" className="font-normal underline">Fale com o Bullla</a></p>
                      <form className="mt-10" onSubmit={handleSubmit(onSubmitRemember)}>
                        <Controller
                          name="email"
                          control={control}
                          rules={{ required: true, minLength: 3 }}
                          render={({ field }) => (
                            <TextField name="email" error={!!errors.email} helperText={
                              errors.email?.type == 'required' ? <HelperText icon={<AlertIcon />} text="E-mail obrigatório" /> :
                                errors.email?.type == 'minLength' ? <HelperText icon={<AlertIcon />} text="E-mail inválido" /> :
                                  errors.email?.type == 'pattern' && <HelperText icon={<AlertIcon />} text="E-mail inválido" />
                            } label="E-mail" variant="standard" className="w-full" {...field} />
                          )}
                        />
                        {error && <div className="mt-8"><HelperText icon={<AlertIcon />} text={error} /></div>}
                        <div className="mt-8">
                          <Button disabled={!!errors.email || !!errors.password} variant="contained" color="primary" size="large" style={{ fontWeight: 'bold' }} type="submit" className="w-full">Enviar</Button>
                        </div>
                        <div className="flex items-center justify-center mt-9 space-x-2 cursor-pointer" onClick={() => setScreen('login')}>
                          <ChevronLeft />
                          <span className="uppercase text-bl-gray text-sm">Voltar ao login</span>
                        </div>
                      </form>
                    </>
                  }
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export const getServerSideProps = async (ctx) => {
  // const apiClient = getApiClient(ctx);
  const { ['pb.token']: token } = parseCookies(ctx);
  if (token && !isTokenExpired(token)) {
    return {
      redirect: {
        destination: '/portal',
        permanent: false
      }
    }
  }
  return {
    props: {
    }
  }
}

Home.layout = EmptyLayout;