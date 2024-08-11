React app - place for showing nice photos

1. components
1.1 App                -- Routing
1.2 Header             -- Keep inside Nav, uses AuthContext
1.3 Footer             -- Stateless component
1.4 Home               -- List last 3 created items
    1.4.1 LastPhotos   -- Render photo card for HomeComponent
1.5 Login              -- login registrated user via useForm and useAuthContext
1.6 Logout             -- logout user via useEffect, useContect, AuthContext
1.7 Register           -- create new registration via useForm, useContext, AuthContext; make validations
1.8 Catalog            -- Render all photos
    1.8.1 CatalogItem  -- Render one photo
1.9 Create             -- Create new item, uses useForm and usePhotoContext
1.10 PhotoDetails      -- Render one item with details, hols edit and delete buttons, create comment filds,  uses useState, useParams, useAuthContext, usePhotoContext, photoService, commentService, reaches AddComment comp
    1.10.1 AddComment  -- hold form for comments, uses useForm
1.11 EditPhoto         -- Amend photo details via useParams, useEffect, useForm, photoService and photoContext

2. contexts
2.1 AuthContext        -- via AuthProvider provides accessToken to children
2.2 PhotoContext       -- via PhotoProvider provides photo details to children

3. hooks
3.1 useForm            -- set formValues, uses useState
3.2 useLocalStorage    -- set state 
3.3 useService         -- uses AuthService

4. services
4.1 authService        -- takes care of login, logout and register
4.2 commentService     -- takes care of creating comments
4.3 photoService       -- takes care of getOne, getAll photos, crate, edit and delete photos
4.4 requester          -- takes care of CRUD operations

