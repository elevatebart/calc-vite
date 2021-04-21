import "@testing-library/cypress/add-commands";
import "./mock-process";
import { register as registerSnapshots } from "@cypress/snapshot";

registerSnapshots();
