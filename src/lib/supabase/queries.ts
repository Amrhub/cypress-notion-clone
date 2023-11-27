'use server';
import { validate } from 'uuid';
import { folders, workspaces } from '../../../migrations/schema';
import { Folder, Subscription, Workspace } from './database.types';
import db from './db';
import { eq } from 'drizzle-orm';

export const getUserSubscriptionStatus = async (userId: string) => {
  try {
    const data = await db.query.subscriptions.findFirst({
      where: (subscription, { eq }) => eq(subscription.userId, userId),
    });

    if (data) return { data: data as Subscription, error: null };
    else return { data: null, error: null };
  } catch (error) {
    console.error('🔴 Error getting user subscription status', error);
    return { data: null, error };
  }
};

export const createWorkspace = async (workspace: Workspace) => {
  try {
    await db.insert(workspaces).values(workspace);
    return { data: null, error: null };
  } catch (error) {
    console.log(error);
    return { data: null, error: 'Error' };
  }
};

export const getFolders = async (workspaceId: string) => {
  const isValid = validate(workspaceId);
  if (!isValid)
    return {
      data: null,
      error: 'Invalid workspace id',
    };
  try {
    // const results: Folder[] | [] = await db
    //   .select()
    //   .from(folders)
    //   .orderBy(folders.createdAt)
    //   .where(eq(folders.workspaceId, workspaceId));

    const results: Folder[] | [] = await db.query.folders.findMany({
      where: (folder, { eq }) => eq(folder.workspaceId, workspaceId),
      orderBy: (field, operators) => operators.asc(field.createdAt),
    });
    return { data: results, error: null };
  } catch (error) {
    console.error('🔴 Error getting folders', error);
    return { data: null, error };
  }
};
