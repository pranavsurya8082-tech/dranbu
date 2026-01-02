-- Drop the existing policy with wrong role
DROP POLICY IF EXISTS "Users can view their own roles" ON public.user_roles;

-- Create the correct policy for authenticated users to view their own roles
CREATE POLICY "Users can view their own roles"
ON public.user_roles
FOR SELECT
TO authenticated
USING (auth.uid() = user_id);