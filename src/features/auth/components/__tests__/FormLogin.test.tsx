import { render, screen, waitFor } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { FormLogin } from "../FormLogin";


const mockNavigate = jest.fn();
jest.mock("react-router-dom", () => ({
  ...jest.requireActual("react-router-dom"),
  useNavigate: () => mockNavigate,
}));

const mockLogin = jest.fn();
jest.mock("../../store/AuthContenxt", () => ({
  useAuth: () => ({ login: mockLogin }),
}));

jest.mock("../../services/authService", () => ({
  authService: {
    login: jest.fn(),
  },
}));

import { authService } from "../../services/authService";


const renderComponent = () => render(<FormLogin />);


describe("FormLogin", () => {
  beforeEach(() => {
    jest.clearAllMocks();
  });

  describe("Renderizado", () => {
    it("muestra los campos de email y password", () => {
      renderComponent();
      expect(screen.getByLabelText(/email/i)).toBeInTheDocument();
      expect(screen.getByLabelText(/password/i)).toBeInTheDocument();
    });

    it("muestra el botón 'Ingresar' en estado inicial", () => {
      renderComponent();
      expect(screen.getByRole("button", { name: /ingresar/i })).toBeInTheDocument();
    });

    it("no muestra ninguna alerta en el estado inicial", () => {
      renderComponent();
      expect(screen.queryByRole("alert")).not.toBeInTheDocument();
    });
  });

  describe("Login exitoso", () => {
    it("llama a authService.login con las credenciales del formulario", async () => {
      (authService.login as jest.Mock).mockResolvedValueOnce({
        success: true,
        data: { id: "1", name: "Esteban", token: "fake-token" },
        message: null,
      });

      renderComponent();
      await userEvent.type(screen.getByLabelText(/email/i), "correo@test.com");
      await userEvent.type(screen.getByLabelText(/password/i), "1111");
      await userEvent.click(screen.getByRole("button", { name: /ingresar/i }));

      await waitFor(() => {
        expect(authService.login).toHaveBeenCalledWith({
          email: "esteban@test.com",
          password: "password123",
        });
      });
    });

    it("llama a login del contexto y redirige al dashboard tras éxito", async () => {
      const fakeUser = { id: "1", name: "Esteban", token: "fake-token" };
      (authService.login as jest.Mock).mockResolvedValueOnce({
        success: true,
        data: fakeUser,
        message: null,
      });

      renderComponent();
      await userEvent.type(screen.getByLabelText(/email/i), "esteban@test.com");
      await userEvent.type(screen.getByLabelText(/password/i), "password123");
      await userEvent.click(screen.getByRole("button", { name: /ingresar/i }));

      await waitFor(() => {
        expect(mockLogin).toHaveBeenCalledWith(fakeUser, fakeUser.token);
        expect(mockNavigate).toHaveBeenCalledWith("/dashboard");
      });
    });
  });
});
