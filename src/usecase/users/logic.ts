import {Repository, user as userDomain} from "../../domain/users";
import {DBClient} from "../../domain/DBClient";
import {AddInput, DeleteInput, GetInput, UpdateInput} from "./input";
import {Failure, Result, Success} from "../../errorTypes/resultType";
import express from "express";


export async function getList(dbClient: DBClient, userRepo: Repository):Promise<userDomain[]> {
    return await userRepo.GetList(dbClient);
}

export async function get(dbClient: DBClient, userRepo: Repository, input: GetInput):Promise<Result<userDomain, Error>> {
    const data = await userRepo.Get(dbClient, input.userID);
    if (data.isFailure()) {
        return new Failure(data.value);
    } else {
        return new Success(data.value);
    }
}

export async function add(dbClient: DBClient, userRepo: Repository, input: AddInput):Promise<Result<void, Error>> {
    const res = await userRepo.Add(dbClient, input.email, input.name);
    if (res.isFailure()) {
        return new Failure(res.value);
    } else {
        return new Success(undefined);
    }
}

export async function update( dbClient:DBClient, userRepo: Repository, input: UpdateInput):Promise<Result<void, Error>> {
    const res = await userRepo.Update(dbClient, input.userID, input.email, input.name);
    if (res.isFailure()) {
        return new Failure(res.value);
    } else {
        return new Success(undefined);
    }
}

export async function del(dbClient:DBClient, userRepo: Repository, input: DeleteInput): Promise<Result<void, Error>> {
    const res = await userRepo.Delete(dbClient, input.userID);
    if (res.isFailure()) {
        return new Failure(res.value);
    } else {
        return new Success(undefined);
    }
}
