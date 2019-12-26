var documenterSearchIndex = {"docs":
[{"location":"man/linear_solvers/#","page":"Linear solvers","title":"Linear solvers","text":"CurrentModule = Tulip.TLPLinearAlgebra","category":"page"},{"location":"man/linear_solvers/#Solving-linear-systems-1","page":"Linear solvers","title":"Solving linear systems","text":"","category":"section"},{"location":"man/linear_solvers/#","page":"Linear solvers","title":"Linear solvers","text":"warning: Warning\nThe overall structure of Linear Solvers is expected to undergo a major update in the near future. In particular, a number of type parametrization shall eventually be replaced by a trait-based implementation,  which should prove more flexible.The high-level interface should not change too much, and the underlying linear algebra     techniques shall remain the same.","category":"page"},{"location":"man/linear_solvers/#Overview-1","page":"Linear solvers","title":"Overview","text":"","category":"section"},{"location":"man/linear_solvers/#","page":"Linear solvers","title":"Linear solvers","text":"The first system we consider is the symmetric quasi-definite augmented system","category":"page"},{"location":"man/linear_solvers/#","page":"Linear solvers","title":"Linear solvers","text":"beginbmatrix\n    -(Theta^-1 + R_p)  A^T\n    A  R_d\nendbmatrix\nbeginbmatrix\n    Delta x\n    Delta y\nendbmatrix\n=\nbeginbmatrix\n    xi_d\n    xi_p\nendbmatrix","category":"page"},{"location":"man/linear_solvers/#","page":"Linear solvers","title":"Linear solvers","text":"One can pivot out the upper-left diagonal block to obtain the positive-definite     normal equations system","category":"page"},{"location":"man/linear_solvers/#","page":"Linear solvers","title":"Linear solvers","text":"left(\n    A (Theta^-1 + R_p)^-1 A^T + R_d\nright)\nDelta y\n=\nxi_p + A (Θ^-1 + R_p)^-1 xi_d","category":"page"},{"location":"man/linear_solvers/#Linear-solvers-1","page":"Linear solvers","title":"Linear solvers","text":"","category":"section"},{"location":"man/linear_solvers/#","page":"Linear solvers","title":"Linear solvers","text":"Here is a list of currently supported linear solvers:","category":"page"},{"location":"man/linear_solvers/#","page":"Linear solvers","title":"Linear solvers","text":"Linear solver type type of A System Method Backend\nDenseLinearSolver Matrix Normal Eqn Direct (Cholesky) LAPACK\nSparseIndefLinearSolver SparseMatricCSC Augm. Sys Direct (LDLt) SuiteSparse\nSparsePosDefLinearSolver SparseMatricCSC Normal Eqn Direct (Cholesky) SuiteSparse\nLDLFLinearSolver SparseMatricCSC Augm. Sys Direct (LDLt) LDLFactorizations","category":"page"},{"location":"man/linear_solvers/#AbstractLinearSolver-1","page":"Linear solvers","title":"AbstractLinearSolver","text":"","category":"section"},{"location":"man/linear_solvers/#","page":"Linear solvers","title":"Linear solvers","text":"This is the base type from which all implementations should derive.","category":"page"},{"location":"man/linear_solvers/#","page":"Linear solvers","title":"Linear solvers","text":"AbstractLinearSolver","category":"page"},{"location":"man/linear_solvers/#Tulip.TLPLinearAlgebra.AbstractLinearSolver","page":"Linear solvers","title":"Tulip.TLPLinearAlgebra.AbstractLinearSolver","text":"AbstractLinearSolver{Tv, Ta}\n\nAbstract container for linear solver used in solving the augmented system.\n\n\n\n\n\n","category":"type"},{"location":"man/linear_solvers/#","page":"Linear solvers","title":"Linear solvers","text":"Custom linear solvers should inherit from the AbstractLinearSolver class, and extend the following two functions:","category":"page"},{"location":"man/linear_solvers/#","page":"Linear solvers","title":"Linear solvers","text":"update_linear_solver!","category":"page"},{"location":"man/linear_solvers/#Tulip.TLPLinearAlgebra.update_linear_solver!","page":"Linear solvers","title":"Tulip.TLPLinearAlgebra.update_linear_solver!","text":"update_linear_solver!(ls, θ, regP, regD)\n\nUpdate internal data, and re-compute factorization/pre-conditioner.\n\nAfter this call, ls can be used to solve the augmented system\n\n    [-(Θ^{-1} + Rp)   A'] [dx] = [ξd]\n    [   A             Rd] [dy] = [ξp]\n\nfor given right-hand sides ξd and ξp.\n\n\n\n\n\n","category":"function"},{"location":"man/linear_solvers/#","page":"Linear solvers","title":"Linear solvers","text":"solve_augmented_system!","category":"page"},{"location":"man/linear_solvers/#Tulip.TLPLinearAlgebra.solve_augmented_system!","page":"Linear solvers","title":"Tulip.TLPLinearAlgebra.solve_augmented_system!","text":"solve_augmented_system!(dx, dy, ls, ξp, ξd)\n\nSolve the symmetric quasi-definite augmented system\n\n    [-(Θ^{-1} + Rp)   A'] [dx] = [ξd]\n    [   A             Rd] [dy] = [ξp]\n\nand over-write dx, dy with the result.\n\nArguments\n\ndx, dy: Vectors of unknowns, modified in-place\nls: Linear solver for the augmented system\nξp, ξd: Right-hand-side vectors\n\n\n\n\n\n","category":"function"},{"location":"man/linear_solvers/#DenseLinearSolver-1","page":"Linear solvers","title":"DenseLinearSolver","text":"","category":"section"},{"location":"man/linear_solvers/#","page":"Linear solvers","title":"Linear solvers","text":"DenseLinearSolver","category":"page"},{"location":"man/linear_solvers/#Tulip.TLPLinearAlgebra.DenseLinearSolver","page":"Linear solvers","title":"Tulip.TLPLinearAlgebra.DenseLinearSolver","text":"DenseLinearSolver{Tv}\n\nLinear solver for the 2x2 augmented system\n\n    [-(Θ^{-1} + Rp)   A'] [dx] = [xi_d]\n    [   A             Rd] [dy] = [xi_p]\n\nwith A dense.\n\nThe augmented system is automatically reduced to the normal equations system. BLAS/LAPACK functions are used whenever applicable.\n\n\n\n\n\n","category":"type"},{"location":"man/linear_solvers/#","page":"Linear solvers","title":"Linear solvers","text":"update_linear_solver!(::DenseLinearSolver{Tv},::AbstractVector{Tv},::AbstractVector{Tv},::AbstractVector{Tv}) where{Tv<:Real}\nupdate_linear_solver!(::DenseLinearSolver{Tv},::AbstractVector{Tv},::AbstractVector{Tv},::AbstractVector{Tv}) where{Tv<:BlasReal}","category":"page"},{"location":"man/linear_solvers/#Tulip.TLPLinearAlgebra.update_linear_solver!-Union{Tuple{Tv}, Tuple{Tulip.TLPLinearAlgebra.DenseLinearSolver{Tv},AbstractArray{Tv,1},AbstractArray{Tv,1},AbstractArray{Tv,1}}} where Tv<:Real","page":"Linear solvers","title":"Tulip.TLPLinearAlgebra.update_linear_solver!","text":"update_linear_solver!(ls::DenseLinearSolver{<:Real}, θ, regP, regD)\n\nCompute normal equations system matrix and update Cholesky factorization.\n\nUses Julia's generic linear algebra.\n\n\n\n\n\n","category":"method"},{"location":"man/linear_solvers/#Tulip.TLPLinearAlgebra.update_linear_solver!-Union{Tuple{Tv}, Tuple{Tulip.TLPLinearAlgebra.DenseLinearSolver{Tv},AbstractArray{Tv,1},AbstractArray{Tv,1},AbstractArray{Tv,1}}} where Tv<:Union{Float32, Float64}","page":"Linear solvers","title":"Tulip.TLPLinearAlgebra.update_linear_solver!","text":"update_linear_solver!(ls::DenseLinearSolver{<:BlasReal}, θ, regP, regD)\n\nCompute normal equations system matrix and update Cholesky factorization.\n\nUses BLAS and LAPACK routines.\n\n\n\n\n\n","category":"method"},{"location":"man/linear_solvers/#","page":"Linear solvers","title":"Linear solvers","text":"solve_augmented_system!(::Vector{Tv},::Vector{Tv},::DenseLinearSolver{Tv}, ::Vector{Tv}, ::Vector{Tv}) where{Tv<:Real}\nsolve_augmented_system!(::Vector{Tv},::Vector{Tv},::DenseLinearSolver{Tv}, ::Vector{Tv}, ::Vector{Tv}) where{Tv<:BlasReal}","category":"page"},{"location":"man/linear_solvers/#Tulip.TLPLinearAlgebra.solve_augmented_system!-Union{Tuple{Tv}, Tuple{Array{Tv,1},Array{Tv,1},Tulip.TLPLinearAlgebra.DenseLinearSolver{Tv},Array{Tv,1},Array{Tv,1}}} where Tv<:Real","page":"Linear solvers","title":"Tulip.TLPLinearAlgebra.solve_augmented_system!","text":"solve_augmented_system!(dx, dy, ls, ξp, ξd)\n\nSolve the augmented system, overwriting dx, dy with the result.\n\nUses two generic triangular solves for solving the normal equations system.\n\n\n\n\n\n","category":"method"},{"location":"man/linear_solvers/#Tulip.TLPLinearAlgebra.solve_augmented_system!-Union{Tuple{Tv}, Tuple{Array{Tv,1},Array{Tv,1},Tulip.TLPLinearAlgebra.DenseLinearSolver{Tv},Array{Tv,1},Array{Tv,1}}} where Tv<:Union{Float32, Float64}","page":"Linear solvers","title":"Tulip.TLPLinearAlgebra.solve_augmented_system!","text":"solve_augmented_system!(dx, dy, ls, ξp, ξd)\n\nSolve the augmented system, overwriting dx, dy with the result.\n\nUses one LAPACK call for solving the normal equations system.\n\n\n\n\n\n","category":"method"},{"location":"man/linear_solvers/#SparseIndefLinearSolver-1","page":"Linear solvers","title":"SparseIndefLinearSolver","text":"","category":"section"},{"location":"man/linear_solvers/#","page":"Linear solvers","title":"Linear solvers","text":"SparseIndefLinearSolver","category":"page"},{"location":"man/linear_solvers/#Tulip.TLPLinearAlgebra.SparseIndefLinearSolver","page":"Linear solvers","title":"Tulip.TLPLinearAlgebra.SparseIndefLinearSolver","text":"SparseIndefLinearSolver{Tv}\n\nLinear solver for the 2x2 augmented system with A sparse.\n\nUses an LDLt factorization of the quasi-definite augmented system.\n\n\n\n\n\n","category":"type"},{"location":"man/linear_solvers/#","page":"Linear solvers","title":"Linear solvers","text":"update_linear_solver!(::SparseIndefLinearSolver{Tv},::AbstractVector{Tv},::AbstractVector{Tv},::AbstractVector{Tv}) where{Tv<:BlasReal}","category":"page"},{"location":"man/linear_solvers/#Tulip.TLPLinearAlgebra.update_linear_solver!-Union{Tuple{Tv}, Tuple{Tulip.TLPLinearAlgebra.SparseIndefLinearSolver{Tv,Ta} where Ta<:(SparseArrays.SparseMatrixCSC{Tv,#s13} where #s13<:Integer),AbstractArray{Tv,1},AbstractArray{Tv,1},AbstractArray{Tv,1}}} where Tv<:Union{Float32, Float64}","page":"Linear solvers","title":"Tulip.TLPLinearAlgebra.update_linear_solver!","text":"update_linear_solver!(ls, θ, regP, regD)\n\nUpdate LDLt factorization of the augmented system.\n\nUpdate diagonal scaling theta, primal-dual regularizations, and re-compute     the factorization. Throws a PosDefException if matrix is not quasi-definite.\n\n\n\n\n\n","category":"method"},{"location":"man/linear_solvers/#","page":"Linear solvers","title":"Linear solvers","text":"solve_augmented_system!(::Vector{Tv},::Vector{Tv},::SparseIndefLinearSolver{Tv}, ::Vector{Tv}, ::Vector{Tv}) where{Tv<:BlasReal}","category":"page"},{"location":"man/linear_solvers/#Tulip.TLPLinearAlgebra.solve_augmented_system!-Union{Tuple{Tv}, Tuple{Array{Tv,1},Array{Tv,1},Tulip.TLPLinearAlgebra.SparseIndefLinearSolver{Tv,Ta} where Ta<:(SparseArrays.SparseMatrixCSC{Tv,#s13} where #s13<:Integer),Array{Tv,1},Array{Tv,1}}} where Tv<:Union{Float32, Float64}","page":"Linear solvers","title":"Tulip.TLPLinearAlgebra.solve_augmented_system!","text":"solve_augmented_system!(dx, dy, ls, ξp, ξd)\n\nSolve the augmented system, overwriting dx, dy with the result.\n\n\n\n\n\n","category":"method"},{"location":"man/linear_solvers/#SparsePosDefLinearSolver-1","page":"Linear solvers","title":"SparsePosDefLinearSolver","text":"","category":"section"},{"location":"man/linear_solvers/#","page":"Linear solvers","title":"Linear solvers","text":"SparsePosDefLinearSolver","category":"page"},{"location":"man/linear_solvers/#Tulip.TLPLinearAlgebra.SparsePosDefLinearSolver","page":"Linear solvers","title":"Tulip.TLPLinearAlgebra.SparsePosDefLinearSolver","text":"SparsePosDefLinearSolver{Tv}\n\nLinear solver for the 2x2 augmented system\n\n    -(Θ^-1 + Rp)   A dx = xi_d\n       A             Rd dy = xi_p\n\nwith A sparse.\n\nUses a Cholesky factorization of the positive definite normal equations system\n\n(A*(Θ^{-1} + Rp)^{-1}*A' + Rd)  dy = xi_p + A*(Θ^{-1} + Rp)^{-1}*xi_d\n                                dx = (Θ^{-1} + Rp)^{-1} * (A' dy - xi_d)\n\n\n\n\n\n","category":"type"},{"location":"man/linear_solvers/#","page":"Linear solvers","title":"Linear solvers","text":"update_linear_solver!(::SparsePosDefLinearSolver{Tv},::AbstractVector{Tv},::AbstractVector{Tv},::AbstractVector{Tv}) where{Tv<:BlasReal}","category":"page"},{"location":"man/linear_solvers/#Tulip.TLPLinearAlgebra.update_linear_solver!-Union{Tuple{Tv}, Tuple{Tulip.TLPLinearAlgebra.SparsePosDefLinearSolver{Tv,Ta} where Ta<:(SparseArrays.SparseMatrixCSC{Tv,#s13} where #s13<:Integer),AbstractArray{Tv,1},AbstractArray{Tv,1},AbstractArray{Tv,1}}} where Tv<:Union{Float32, Float64}","page":"Linear solvers","title":"Tulip.TLPLinearAlgebra.update_linear_solver!","text":"update_linear_solver!(ls, θ, regP, regD)\n\nCompute normal equation system matrix, and update the factorization.\n\n\n\n\n\n","category":"method"},{"location":"man/linear_solvers/#","page":"Linear solvers","title":"Linear solvers","text":"solve_augmented_system!(::Vector{Tv},::Vector{Tv},::SparsePosDefLinearSolver{Tv}, ::Vector{Tv}, ::Vector{Tv}) where{Tv<:BlasReal}","category":"page"},{"location":"man/linear_solvers/#Tulip.TLPLinearAlgebra.solve_augmented_system!-Union{Tuple{Tv}, Tuple{Array{Tv,1},Array{Tv,1},Tulip.TLPLinearAlgebra.SparsePosDefLinearSolver{Tv,Ta} where Ta<:(SparseArrays.SparseMatrixCSC{Tv,#s13} where #s13<:Integer),Array{Tv,1},Array{Tv,1}}} where Tv<:Union{Float32, Float64}","page":"Linear solvers","title":"Tulip.TLPLinearAlgebra.solve_augmented_system!","text":"solve_augmented_system!(dx, dy, ls, ξp, ξd)\n\nSolve the augmented system, overwriting dx, dy with the result.\n\n\n\n\n\n","category":"method"},{"location":"man/linear_solvers/#LDLFLinearSolver-1","page":"Linear solvers","title":"LDLFLinearSolver","text":"","category":"section"},{"location":"man/linear_solvers/#","page":"Linear solvers","title":"Linear solvers","text":"LDLFLinearSolver","category":"page"},{"location":"man/linear_solvers/#Tulip.TLPLinearAlgebra.LDLFLinearSolver","page":"Linear solvers","title":"Tulip.TLPLinearAlgebra.LDLFLinearSolver","text":"LDLFLinearSolver{Tv}\n\nLinear solver for the 2x2 augmented system with A sparse.\n\nUses LDLFactorizations.jl to compute an LDLt factorization of the quasi-definite augmented system.\n\n\n\n\n\n","category":"type"},{"location":"man/linear_solvers/#","page":"Linear solvers","title":"Linear solvers","text":"update_linear_solver!(::LDLFLinearSolver{Tv},::AbstractVector{Tv},::AbstractVector{Tv},::AbstractVector{Tv}) where{Tv<:Real}","category":"page"},{"location":"man/linear_solvers/#Tulip.TLPLinearAlgebra.update_linear_solver!-Union{Tuple{Tv}, Tuple{Tulip.TLPLinearAlgebra.LDLFLinearSolver{Tv,Ta} where Ta<:(SparseArrays.SparseMatrixCSC{Tv,#s13} where #s13<:Integer),AbstractArray{Tv,1},AbstractArray{Tv,1},AbstractArray{Tv,1}}} where Tv<:Real","page":"Linear solvers","title":"Tulip.TLPLinearAlgebra.update_linear_solver!","text":"update_linear_solver!(ls, θ, regP, regD)\n\nUpdate LDLt factorization of the augmented system.\n\nUpdate diagonal scaling theta, primal-dual regularizations, and re-compute     the factorization. Throws a PosDefException if matrix is not quasi-definite.\n\n\n\n\n\n","category":"method"},{"location":"man/linear_solvers/#","page":"Linear solvers","title":"Linear solvers","text":"solve_augmented_system!(::Vector{Tv},::Vector{Tv},::LDLFLinearSolver{Tv}, ::Vector{Tv}, ::Vector{Tv}) where{Tv<:Real}","category":"page"},{"location":"man/linear_solvers/#Tulip.TLPLinearAlgebra.solve_augmented_system!-Union{Tuple{Tv}, Tuple{Array{Tv,1},Array{Tv,1},Tulip.TLPLinearAlgebra.LDLFLinearSolver{Tv,Ta} where Ta<:(SparseArrays.SparseMatrixCSC{Tv,#s13} where #s13<:Integer),Array{Tv,1},Array{Tv,1}}} where Tv<:Real","page":"Linear solvers","title":"Tulip.TLPLinearAlgebra.solve_augmented_system!","text":"solve_augmented_system!(dx, dy, ls, ξp, ξd)\n\nSolve the augmented system, overwriting dx, dy with the result.\n\n\n\n\n\n","category":"method"},{"location":"formulation/#Formulations-1","page":"Problem formulation","title":"Formulations","text":"","category":"section"},{"location":"formulation/#Model-input-1","page":"Problem formulation","title":"Model input","text":"","category":"section"},{"location":"formulation/#","page":"Problem formulation","title":"Problem formulation","text":"Tulip takes as input LP problems of the form","category":"page"},{"location":"formulation/#","page":"Problem formulation","title":"Problem formulation","text":"    beginarrayrrcll\n    (P)    \n    displaystyle min_x  c^Tx  +  c_0\n    st\n     l^b_i leq  a_i^T x  leq u^b_i  forall i = 1  m\n     l^x_j leq  x_j  leq u^x_j  forall j = 1  n\n    endarray","category":"page"},{"location":"formulation/#","page":"Problem formulation","title":"Problem formulation","text":"where l^bx u^b x in mathbbR cup  - infty + infty , i.e., some of the bounds may be infinite.","category":"page"},{"location":"formulation/#","page":"Problem formulation","title":"Problem formulation","text":"This original formulation is then converted to standard form.","category":"page"},{"location":"formulation/#Standard-form-1","page":"Problem formulation","title":"Standard form","text":"","category":"section"},{"location":"formulation/#","page":"Problem formulation","title":"Problem formulation","text":"Internally, Tulip solves LPs of the form","category":"page"},{"location":"formulation/#","page":"Problem formulation","title":"Problem formulation","text":"    beginarrayrl\n    (P)    \n    displaystyle min_x\n     c^T x +  c_0\n    st\n     A x = b\n     x leq u\n     x geq 0\n    endarray","category":"page"},{"location":"formulation/#","page":"Problem formulation","title":"Problem formulation","text":"where x c u in mathbbR^n, A in mathbbR^m times n and b in mathbbR^m. Some u_j may may take infinite value, i.e., the corresponding variable x_j has no upper bound.","category":"page"},{"location":"formulation/#","page":"Problem formulation","title":"Problem formulation","text":"The original problem is automatically reformulated into standard form before the optimization is performed. This transformation is transparent to the user.","category":"page"},{"location":"#","page":"Home","title":"Home","text":"CurrentModule = Tulip","category":"page"},{"location":"#Tulip.jl-1","page":"Home","title":"Tulip.jl","text":"","category":"section"},{"location":"#Overview-1","page":"Home","title":"Overview","text":"","category":"section"},{"location":"#","page":"Home","title":"Home","text":"Tulip is an open-source interior-point solver for linear programming.","category":"page"},{"location":"#Installation-1","page":"Home","title":"Installation","text":"","category":"section"},{"location":"#","page":"Home","title":"Home","text":"Tulip is 100% Julia, so install it just like any Julia package:","category":"page"},{"location":"#","page":"Home","title":"Home","text":"julia> ]\npkg> add Tulip","category":"page"},{"location":"#","page":"Home","title":"Home","text":"No additional building step is required.","category":"page"},{"location":"#Citing-Tulip.jl-1","page":"Home","title":"Citing Tulip.jl","text":"","category":"section"},{"location":"#","page":"Home","title":"Home","text":"If you use Tulip in your work, we kindly ask that you cite the following reference. The PDF is freely available here, and serves as a user manual for advanced users.","category":"page"},{"location":"#","page":"Home","title":"Home","text":"@TechReport{Tulip.jl,\n    title = {{Tulip}.jl: an open-source interior-point linear optimization\n    solver with abstract linear algebra},\n    url = {https://www.gerad.ca/fr/papers/G-2019-36},\n    Journal = {Les Cahiers du Gerad},\n    Author = {Anjos, Miguel F. and Lodi, Andrea and Tanneau, Mathieu},\n    year = {2019}\n}","category":"page"}]
}
