
import postgres from "https://deno.land/x/postgresjs@v3.3.3/mod.js";

const sql = postgres({user: "postgres",
database: "postgres",
password: "password",
hostname: "localhost",
port: 5432,});


const getTodos = async (request) => {
const items = await sql`SELECT * FROM todos`;
  return Response.json(items);
};

const getTodo = async (request, urlPatternResult) => {
  const id = urlPatternResult.pathname.groups.id;
  const todos = await sql`SELECT * FROM todos WHERE id = ${id}`;
  if (todos.length === 0) {
      return new Response("Bad request", {status: 404})
  }

  return Response.json(todos[0]);
};

const addTodo = async (request) => {
  let todo;
  try {
    todo = await request.json();
  } catch (e) {
    return new Response("Bad request", { status: 400 });
  }
  
  if (todo.item === null || todo.item === "") {
      return new Response("Bad request", { status: 400 });
  }

  const todos = await sql`INSERT INTO todos(item) VALUES(${todo.item})`;
  return new Response("OK", { status: 200 });
};

const urlMapping = [
    {
    method: "GET",
    pattern: new URLPattern({ pathname: "/todos/:id" }),
    fn: getTodo,
  },
  {
    method: "GET",
    pattern: new URLPattern({ pathname: "/todos" }),
    fn: getTodos,
  },
  {
    method: "POST",
    pattern: new URLPattern({ pathname: "/todos" }),
    fn: addTodo,
  },
];

const handleRequest = async (request) => {
  const mapping = urlMapping.find(
    (um) => um.method === request.method && um.pattern.test(request.url)
  );

  if (!mapping) {
    return new Response("Not found", { status: 404 });
  }

  const mappingResult = mapping.pattern.exec(request.url);
  return await mapping.fn(request, mappingResult);
};



Deno.serve({ port: 7777 }, handleRequest);
